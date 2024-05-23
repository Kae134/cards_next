import { NextResponse } from "next/server";

export async function POST(req, res) {
    const Formdata = await req.formData();
    const num = Formdata.get('number');

    return NextResponse.json({ num })
}