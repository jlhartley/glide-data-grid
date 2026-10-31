import * as React from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    onClickOutside: () => void;
    isOutsideClick?: (event: MouseEvent | TouchEvent) => boolean;
    // If provided, it will use the provided element as the event target
    // instead of document.
    customEventTarget?: HTMLElement | Window | Document;
}

export default class ClickOutsideContainer extends React.PureComponent<Props> {
    private wrapperRef = React.createRef<HTMLDivElement>();

    private eventTarget: HTMLElement | Window | Document | undefined;

    public componentDidMount() {
        this.updateEventTarget();
    }

    public componentDidUpdate() {
        this.updateEventTarget();
    }

    public componentWillUnmount() {
        this.removeEventListeners();
    }

    private removeEventListeners() {
        this.eventTarget?.removeEventListener("pointerdown", this.clickOutside, true);
        this.eventTarget?.removeEventListener("contextmenu", this.clickOutside, true);
        this.eventTarget = undefined;
    }

    private updateEventTarget() {
        const next = this.props.customEventTarget ?? document;
        if (next === this.eventTarget) return;
        this.removeEventListeners();
        this.eventTarget = next;
        next.addEventListener("pointerdown", this.clickOutside, true);
        next.addEventListener("contextmenu", this.clickOutside, true);
    }

    private clickOutside = (event: Event) => {
        if (this.props.isOutsideClick && !this.props.isOutsideClick(event as MouseEvent | TouchEvent)) {
            return;
        }
        if (this.wrapperRef.current !== null && !this.wrapperRef.current.contains(event.target as Node | null)) {
            let node = event.target as Element | null;
            while (node !== null) {
                if (node.classList.contains("click-outside-ignore")) {
                    return;
                }

                node = node.parentElement;
            }
            this.props.onClickOutside();
        }
    };

    public render(): React.ReactNode {
        const { onClickOutside, isOutsideClick, customEventTarget, ...rest } = this.props;
        return (
            <div {...rest} ref={this.wrapperRef}>
                {this.props.children}
            </div>
        );
    }
}
