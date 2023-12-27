import { MONGODB_CONNECT } from "@/db/mongo";
import Message from "@/schema/message";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const { firstname, lastname, phone, email, investmain, mainspan, message } = await req.json()
        await MONGODB_CONNECT()
        await Message.create({ firstname, lastname, phone, email, investmain, mainspan, message })
        return NextResponse.json({ message: 'Successful USER_MESSAGE process' }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Unsuccessful USER_MESSAGE process' }, { status: 500 });
    }
}

// export const GET = async (req) => {
//     try {
//         await MONGODB_CONNECT()
//         const message = await Message.find()
//         return NextResponse.json(message);
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({ message: 'Unsuccessful SUBSCRIBE process' }, { status: 500 });
//     }
// }

// export const DELETE = async (req) => {
//     try {
//         const id = req.nextUrl.searchParams.get('id')
//         await MONGODB_CONNECT();
//         await Message.findByIdAndDelete(id);
//         console.log('Alooo :',id);
//         return NextResponse.json({ message: 'Topic deleted' }, { status: 200 });
//     } catch (error) {
//         console.error('Error varrr', error);
//     }
// }
