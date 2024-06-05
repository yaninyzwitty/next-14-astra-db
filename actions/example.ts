"use server";

export const onAddMessage = async ({ message}: { message: string }) => {


    console.log(message);
    return message;

}