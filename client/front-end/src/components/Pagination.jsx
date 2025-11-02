export default function Pagination({ meta, onPageChange }) {
  const totalPages = Math.ceil(meta.total / meta.limit);
  if (totalPages <= 1) return null;

  return (
    <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === meta.page}
          style={{
            padding: "0.4rem 0.8rem",
            background: page === meta.page ? "#333" : "#eee",
            color: page === meta.page ? "#fff" : "#000",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
