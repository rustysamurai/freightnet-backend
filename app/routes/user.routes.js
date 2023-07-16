// import { authJwt } from "../middleware";
// import { allAccess, userBoard, adminBoard } from "../controllers/user.controller";
// export default function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });
//   app.get("/api/test/all", allAccess);
//   app.get(
//     "/api/test/user",
    
//     userBoard
//   );     
//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     adminBoard
//   );
// };