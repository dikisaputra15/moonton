export default function PrimaryButton({
    className = "",
    variant = "primary",
    processing,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
