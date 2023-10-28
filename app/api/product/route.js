import { NextResponse } from "next/server";
import { mysqlPool } from "../Config/db";

export async function GET(req, res) {

  const promisePool = mysqlPool.promise();
  const [rows,fields] = await promisePool.query(
      "SELECT * FROM attractions"
    );

  return NextResponse.json(rows)
}


