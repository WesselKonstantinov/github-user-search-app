function UserBio({ bio }) {
  return (
    <p
      className={`${bio ? "" : "opacity-75"} mt-8.5 font-normal leading-loose`}
    >
      {bio || "This profile has no bio"}
    </p>
  );
}

export default UserBio;
