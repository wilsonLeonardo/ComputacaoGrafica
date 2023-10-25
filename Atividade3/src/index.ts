import fs from "fs";
import MyOBJParser from "./utils/CustomOBJParser";

function main() {
  const objFilePath = "src/obj/golfball.obj";
  const data = fs.readFileSync(objFilePath, "utf-8");
  const parser = new MyOBJParser(data);

  const result = parser.parse();

  console.log(result.models);
}

main();
