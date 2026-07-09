const fs = require("fs");
const path = require("path");

// Repository path from command line arguments or default hardcoded path
const repoPath = process.argv[2] || "D:\\dev_projects\\leetcode-companywise-interview-questions-master";

// Output directory under the client app
const outputDir = path.join(__dirname, "../client/src/data/companies");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Reading repository from: ${repoPath}`);
console.log(`Writing JSON outputs to: ${outputDir}`);

if (!fs.existsSync(repoPath)) {
  console.error(`Error: Repository path does not exist: ${repoPath}`);
  process.exit(1);
}

// Function to parse a CSV line respecting quotes
function parseCSVLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

// Format company name from folder name (e.g., bank-of-america -> Bank Of America)
function formatCompanyName(folderName) {
  return folderName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

try {
  const entries = fs.readdirSync(repoPath, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name !== ".git") {
      const companyFolder = path.join(repoPath, entry.name);
      const csvPath = path.join(companyFolder, "all.csv");

      if (fs.existsSync(csvPath)) {
        const fileContent = fs.readFileSync(csvPath, "utf8");
        // Split by lines, handling CRLF/LF
        const lines = fileContent.split(/\r?\n/).filter((line) => line.trim() !== "");

        if (lines.length <= 1) {
          // Empty or header-only file
          continue;
        }

        const questions = [];
        // Header line: ID,URL,Title,Difficulty,Acceptance %,Frequency %
        for (let i = 1; i < lines.length; i++) {
          const parsed = parseCSVLine(lines[i]);
          if (parsed.length < 6) {
            continue;
          }

          const [id, url, title, difficulty, acceptance, frequency] = parsed;

          questions.push({
            id: parseInt(id, 10),
            title: title,
            difficulty: difficulty,
            acceptance: acceptance,
            frequency: frequency,
            leetcodeUrl: url
          });
        }

        const companyJson = {
          company: formatCompanyName(entry.name),
          questions: questions
        };

        const outPath = path.join(outputDir, `${entry.name}.json`);
        fs.writeFileSync(outPath, JSON.stringify(companyJson, null, 2), "utf8");
        count++;
      }
    }
  }

  console.log(`Successfully converted ${count} company CSVs to JSON.`);
} catch (error) {
  console.error("Error during conversion:", error);
  process.exit(1);
}
