export const Signup = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          border: "1px solid black",
        }}
      >
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};
