export const GET = async () => {
  console.log("route");

  return Response.json({ hi: "bye" }, { status: 200 });
};
