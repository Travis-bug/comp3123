// Shows the submitted information in a table under the form.
function SubmittedInfo({ data }) {
  const rows = [
    ['Email:', data.email],
    ['Full Name:', data.fullName],
    ['Address:', data.address2 ? `${data.address}, ${data.address2}` : data.address],
    ['City:', data.city],
    ['Province:', data.province],
    ['Postal Code:', data.postalCode],
  ]

  return (
    <table className="info-table">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <th>{label}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SubmittedInfo
