export default function Footer() {
  return (
    <footer style={{
      borderTop: '2px solid var(--ink)',
      padding: '24px 0',
      marginTop: 40,
      textAlign: 'center',
    }}>
      <div className="container">
        <div style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 12,
          color: 'var(--red)',
          letterSpacing: 2,
          marginBottom: 8,
        }}>
          ~ END OF ZINE ~
        </div>

        <div style={{
          fontFamily: 'var(--font-hand)',
          fontSize: 18,
          color: 'var(--ink-light)',
        }}>
          &copy; {new Date().getFullYear()} Godwin D. Luna-an
        </div>

        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          color: 'var(--ink-light)',
          marginTop: 8,
        }}>
          built with react + tailwind &middot; designed with ❤ and tape
        </div>

        <div style={{
          fontFamily: 'var(--font-hand)',
          fontSize: 16,
          color: 'var(--ink-light)',
          marginTop: 12,
        }}>
          ~ thanks for reading ~
        </div>
      </div>
    </footer>
  )
}
