import "./WidgetLg.css";

export default function WidgetSm() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Edelo Hat</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">#122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Edelo Hat</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">#122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Edelo Hat</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">#122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Edelo Hat</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">#122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
