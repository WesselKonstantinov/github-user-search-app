function UserDetails({ details }) {
  const getLinkFromUserDetail = (name, value) => {
    const links = {
      blog: value,
      company: `https://github.com/${encodeURIComponent(
        value.replace("@", "")
      )}`,
      location: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        value
      )}`,
      twitter: `https://twitter.com/${value}`,
    };

    return links[name];
  };

  return (
    <ul role="list">
      {details.map((detail) => (
        <li
          key={detail.name}
          role="listitem"
          className={detail.value ? "" : "opacity-50"}
        >
          <span className="sr-only">{detail.name}:</span>
          {detail.icon}
          {detail.value ? (
            <a
              href={getLinkFromUserDetail(detail.name, detail.value)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {detail.value}
            </a>
          ) : (
            <span>Not Available</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default UserDetails;
