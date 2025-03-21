const Lupa = (props) => {
    return (
      <svg
      {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="1.6rem"
        height="1.6rem"
        viewBox="0 0 32 32"
      >
        <path
          fill="none"
          stroke="currentColor"
          d="M11.63 8h7.38v2h-7.38z"
          className="ouiIcon__fillSecondary"
        />
        <path fill="currentColor" d="M7 8h3.19v2H7z" />
        <path
          fill="none"
          stroke="currentColor"
          d="M7 16h7.38v2H7z"
          className="ouiIcon__fillSecondary"
        />
        <path fill="currentColor" d="M15.81 16H19v2h-3.19zM7 12h9v2H7z" />
        <path
          fill="currentColor"
          d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13s13-5.82 13-13A13 13 0 0 0 13 0m0 24C6.925 24 2 19.075 2 13S6.925 2 13 2s11 4.925 11 11s-4.925 11-11 11m9.581-.007l1.414-1.414l7.708 7.708l-1.414 1.414z"
        />
      </svg>
    );
  };
  
  export default Lupa;
  