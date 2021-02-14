export interface PanelProps {
    children: React.ReactNode;
}

export default (function Panel(props) {
    const { children } = props;
    return <div>{children}</div>;
} as React.FC<PanelProps>);
