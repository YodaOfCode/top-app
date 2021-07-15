import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import {useEffect, useState} from "react";
import Rating from "../components/Rating/Rating";
import {withLayout} from "../layout/Layout";

const Home = (): JSX.Element => {
    const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(4)

    useEffect(() => {
        console.log('');
    }, []);

    return (
        <>
            <Htag tag='h1'>{counter}</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='l'>Big</P>
            <P size='s'>Normal</P>
            <P size='m'>Little</P>
            <Tag size='s' color='ghost'>Small</Tag>
            <Tag size='m' color='red'>Medium</Tag>
            <Tag size='m'>Medium</Tag>
            <Tag size='m' color='primary'>Medium</Tag>
            <Tag size='m'>Medium</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    );
};

export default withLayout(Home);
