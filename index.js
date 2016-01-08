// Data Structure
exports.Edge = require("./hem/Core/Edge.js");
exports.HalfEdge = require("./hem/Core/HalfEdge.js");
exports.Vertex = require("./hem/Core/Vertex.js");
exports.Face = require("./hem/Core/Face.js");
exports.Mesh = require("./hem/Core/Mesh.js");

// Checks
exports.Integrity = require("./hem/Integrity/Integrity.js");
exports.MeshIntegrity = require("./hem/Integrity/MeshIntegrity.js");
exports.FaceIntegrity = require("./hem/Integrity/FaceIntegrity.js");
exports.EdgeIntegrity = require("./hem/Integrity/EdgeIntegrity.js");
exports.HalfEdgeIntegrity = require("./hem/Integrity/HalfEdgeIntegrity.js");
exports.VertexIntegrity = require("./hem/Integrity/VertexIntegrity.js");

// Operators
exports.LoopOperator = require("./hem/Operators/Loop.js");
exports.CatmullClarkOperator = require("./hem/Operators/CatmullClark.js");
exports.QuadSubdivideOperator = require("./hem/Operators/QuadSubdivide.js");
exports.TriangulateOperator = require("./hem/Operators/Triangulate.js");