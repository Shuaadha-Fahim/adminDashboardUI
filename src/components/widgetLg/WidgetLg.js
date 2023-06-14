import "./widgetLg.css"

const WidgetLg = () => {
    
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
      return (
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Latest transactions</h3>
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
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Saman Weerakoon</span>
              </td>
              <td className="widgetLgDate">23 Apr 2022</td>
              <td className="widgetLgAmount">Rs.12,000</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">2 Jun 2022</td>
              <td className="widgetLgAmount">Rs.20,000</td>
              <td className="widgetLgStatus">
                <Button type="Declined" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Anush WMCD</span>
              </td>
              <td className="widgetLgDate">15 Aug 2022</td>
              <td className="widgetLgAmount">Rs.9,000</td>
              <td className="widgetLgStatus">
                <Button type="Pending" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Carolina Natasha</span>
              </td>
              <td className="widgetLgDate">2 Oct 2022</td>
              <td className="widgetLgAmount">Rs.8,000</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
          </table>
        </div>
      );
    }
    export default WidgetLg;    