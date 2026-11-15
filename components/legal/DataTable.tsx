/** Tabel retensi: header gelap, baris zebra, scroll horizontal di mobile. */
export function DataTable({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={`Tabel ${head[0]} dan ${head[1]}`}>
      <table className="data-table">
        <thead>
          <tr>
            <th scope="col">{head[0]}</th>
            <th scope="col">{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td>{a}</td>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
