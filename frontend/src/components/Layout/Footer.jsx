export default function Footer() {
    return (<footer className="final-cta">
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 20px', fontSize: '12px' }}>
            <span>&copy; {new Date().getFullYear()} THE GREY STAG.</span>
            <a href="/admin" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.3 }}>ADMIN</a>
        </div>
    </footer>);
}
