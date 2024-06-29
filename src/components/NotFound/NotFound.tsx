export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__emoji">😕</div>
      <div className="not-found__title">No Definitions Found</div>
      <div className="not-found__description">
        {`Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.`}
      </div>
    </div>
  );
};
