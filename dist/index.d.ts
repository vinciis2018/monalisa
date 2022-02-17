/// <reference types="react" />
declare type MonaportProps = {
    screen: string;
    monaName: string;
    onClick?: () => void;
};
declare function Monalisa({ screen, monaName }: MonaportProps): JSX.Element;

export { Monalisa };
