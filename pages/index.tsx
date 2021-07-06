import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Text1</Htag>
            <Button appearance='primary'>Кнопка</Button>
            <Button appearance='ghost'>Кнопка</Button>
        </>
    );
}
