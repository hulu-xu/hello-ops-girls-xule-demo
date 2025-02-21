import express, {Request,Response} from 'express';
export const app = express();

app.get('/', (req: Request, res: Response) => {
    res.set('Content-Type','text/plain');
    res.status(200).send("" +
        " ____  _______     _____  ____  ____     ____ ___ ____  _     \n\n" +
        "|  _ \\| ____\\ \\   / / _ \\|  _ \\/ ___|   / ___|_ _|  _ \\| |    \n\n" +
        "| | | |  _|  \\ \\ / / | | | |_) \\___ \\  | |  _ | || |_) | |    \n\n" +
        "| |_| | |___  \\ V /| |_| |  __/ ___) | | |_| || ||  _ <| |___ \n\n" +
        "|____/|_____|  \\_/  \\___/|_|   |____/   \\____|___|_| \\_\\_____|\n\n");
});
