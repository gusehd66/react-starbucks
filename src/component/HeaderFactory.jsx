import { contents } from "../data/contents";

const HeaderFactory = () => {
  return (
    <>
      {contents.map((contents) => {
        return (
          <li className="item" key={contents.title}>
            <div className="item__name">{contents.title}</div>
            <div className="item__contents">
              <div className="contents__menu">
                <ul className="inner">
                  {contents.inner.map((inner) => {
                    return (
                      <li key={inner.menu}>
                        <h4>{inner.menu}</h4>
                        <ul>
                          {inner.items.map((item) => {
                            return <li key={item}>{item}</li>;
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="contents__texture">
                <div className="inner">
                  {contents.texture.map((texture) => {
                    return (
                      <div key={texture.head}>
                        <h4>{texture.head}</h4>
                        <p>{texture.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default HeaderFactory;
