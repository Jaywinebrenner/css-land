import React from "react";

const Carebridge = () => {
  return (
    <section className="carebridge-table">
      <div className="container">
        <div className="fusion-fullwidth fullwidth-box nonhundred-percent-fullwidth non-hundred-percent-height-scrolling background">
          <div className="fusion-builder-row fusion-row">
            <div className="fusion-layout-column fusion_builder_column fusion_builder_column_1_1 fusion-one-full fusion-column-first fusion-column-last 1_1 column">
              <div className="fusion-column-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th className="plan large-col">Plan</th>
                      <th className="silver">Silver</th>
                      <th className="gold">Gold</th>
                      <th className="managed">Managed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="large-col">Cost</td>
                      <td className="center">Free</td>
                      <td className="center">90-day Free Trial</td>
                      <td className="center">Free Needs Analysis</td>
                    </tr>
                    <tr>
                      <td className="large-col">Interface</td>
                      <td className="center">One Interface</td>
                      <td className="center">Unlimited Interfaces</td>
                      <td className="center">Unlimited Interfaces</td>
                    </tr>
                    <tr>
                      <td className="large-col">Licensing</td>
                      <td className="center">Easily Migrate to Gold</td>
                      <td className="center">Flexible Licensing Options</td>
                      <td className="center">Flexible Licensing Options</td>
                    </tr>
                    <tr>
                      <td className="large-col">Customization</td>
                      <td className="center">Build Your Own</td>
                      <td className="center">Build Your Own</td>
                      <td className="center">Custom Built by eMedApps</td>
                    </tr>

                  </tbody>
                </table>
                <div className="fusion-clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carebridge;
