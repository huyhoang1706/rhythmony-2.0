import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (session) {
    const idToken = session.idToken;
    const url = new URL(
      `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/logout?id_token_hint=${idToken}&redirect_uri=${encodeURIComponent(process.env.NEXTAUTH_URL!)}`,
    );
    try {
      const resp = await fetch(url, { method: "GET" });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        status: 400,
        message: "Error when loging out",
      });
    }
  }
  return NextResponse.json({
    status: 200,
  });
}
