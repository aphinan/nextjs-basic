import { NextResponse } from "next/server";
import { mysqlPool } from "@/Config/db";

export async function GET(request, {params}) {

    const id =params.id
    const promisePool = mysqlPool.promise();
    const [rows,fields] = await promisePool.query(
      `SELECT * FROM attractions WHERE id = ?`,[id]
    );
    
    return NextResponse.json(rows)
}