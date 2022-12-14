import { IsNotEmpty, Length } from "class-validator";

export class CreateUser {
    @IsNotEmpty({
        message: "Nome do usuário não pode ser vazio!"
    })
    @Length(5, 100, {
        message: "Nome do usuário deve conter entre 5 e 100 caracteres!"
    })
    name: string;

    @IsNotEmpty({
        message: "Função do usuário não pode ser vazia!"
    })
    function: string;
}