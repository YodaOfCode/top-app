import {ReactNode} from "react";

export default interface HtagProps {
    children: ReactNode,
    tag: 'h1' | 'h2' | 'h3',
}
