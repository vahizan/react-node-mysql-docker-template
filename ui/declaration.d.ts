declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.module.css' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.svg' {
    const value: SvgrComponent;
    export default value;
}
