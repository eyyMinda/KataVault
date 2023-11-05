import fs from 'fs';
import path from 'path';
import minimist from 'minimist';

// Parse command line arguments using minimist
const args = minimist(process.argv.slice(2));
const [[kyuLevel], fileName] = Object.values(args);

if (!fileName || !kyuLevel) {
  console.error('Usage: npm run create <file-name> <kyu-level>');
  process.exit(1);
}

const kyuList = [1, 2, 3, 4, 5, 6, 7, 8];
if (!kyuList.includes(kyuLevel)) {
  console.error('Invalid: Kyu must be 1 to 8');
  process.exit(1);
}

const exampleDir = '@@example';
const kyuDir = `${kyuLevel}-kyu`;
if (!fs.existsSync(kyuDir)) fs.mkdirSync(kyuDir);

const filesToCreate = [`${fileName}.ts`, `${fileName}.test.ts`, `${fileName}.md`];

filesToCreate.forEach((file) => {
  // Create the file if it doesn't exist
  const filePath = path.join(kyuDir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
    console.log(`Created ${filePath}`);
  }

  // Read the content from the corresponding example file and write it to the destination file
  const extension = file.slice(file.lastIndexOf('.'));
  const exampleFilePath = path.join(exampleDir, 'example' + extension);
  const content = fs.readFileSync(exampleFilePath, 'utf-8');
  fs.writeFileSync(filePath, content);

  console.log(`Copied content to ${filePath}`);
});
