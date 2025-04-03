import "./Logo.css"

export default function Logo({ size = 60 }) {
    return (
        <div style={{ width: size, height: size }} className="logo"></div>
    )
}
