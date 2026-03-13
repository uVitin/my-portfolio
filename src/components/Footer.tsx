export default function Footer() {
  return (
    <footer style={{
      padding: 'clamp(20px,3vw,32px) clamp(24px,5vw,60px)',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
      position: 'relative',
      zIndex: 1,
    }}>
      <p style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 11,
        color: 'var(--muted)',
        letterSpacing: '0.08em',
      }}>
        © {new Date().getFullYear()} Albert Vitor. Todos os direitos reservados.
      </p>
      <p style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 11,
        color: 'var(--muted)',
        letterSpacing: '0.08em',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        Disponível para projetos —
        <span style={{ color: 'var(--accent)' }}>●</span>
        Online
      </p>
    </footer>
  )
}
