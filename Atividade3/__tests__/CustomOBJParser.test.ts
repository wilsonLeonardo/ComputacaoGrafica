import CustomOBJParser from '../src/utils/CustomOBJParser';
import { Face, ObjFile, Vertex } from '../src/utils/ICustomOBJParser';

describe('CustomOBJParser', () => {
  let parser: CustomOBJParser;

  beforeAll(() => {
    const objContents = `
      v 1.0 2.0 3.0
      v 4.0 5.0 6.0
      f 1 2 3
    `;
    parser = new CustomOBJParser(objContents);
  });

  it('should parse vertices correctly', () => {
    const result: ObjFile = parser.parse();
    const vertices: Vertex[] = result.models[0].vertices;
    expect(vertices).toHaveLength(2);
    console.log(vertices)
    expect(vertices[0]).toEqual({x: 1.0, y: 2.0, z: 3.0});
    expect(vertices[1]).toEqual({x: 4.0, y: 5.0, z: 6.0});
  });

  it('should parse faces correctly', () => {
    const result: ObjFile = parser.parse();
    const faces: Face[] = result.models[0].faces;
    expect(faces).toHaveLength(1);
    expect(faces[0].vertices).toEqual([{ vertexIndex: 1, textureCoordsIndex: 0, vertexNormalIndex: 0 }, 
        { vertexIndex: 2, textureCoordsIndex: 0, vertexNormalIndex: 0 }, { vertexIndex: 3, textureCoordsIndex: 0, vertexNormalIndex: 0 }]);
  });
});
