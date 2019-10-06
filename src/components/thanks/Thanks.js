/** Created by Filip Drgoň on 06/10/2019. */

import React from "react";
import { useIntl } from "react-intl";

const Thanks = props => {
  const { formatMessage } = useIntl();
  return (
    <div className="react-transition fade-in thanks-container">
      <h1 className="thanks-title"> {formatMessage({ id: "thanks.title" })}</h1>
      <p>{formatMessage({ id: "thanks.p1" })}</p>
      <p>
        <>
          {formatMessage({ id: "thanks.p2" })}(
          <a
            href={
              "https://zlatyfond.sme.sk/dielo/82/Botto_Margita-a-Besna/1#ftn.id2523094"
            }
          >
            link
          </a>
          ).
        </>
      </p>
      <p>{formatMessage({ id: "thanks.p3" })}</p>
    </div>
  );
};

Thanks.propTypes = {};
Thanks.defaultProps = {};

export default Thanks;
