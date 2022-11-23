export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
    name: string;
    errorMessage?: string;
    control: any;
}