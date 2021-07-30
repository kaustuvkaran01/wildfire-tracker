const LocationInfoBox = ({ info }) => {
    return(
        <div className="loc-info">
            <h2>
                Even Location Info
            </h2>
            <ul>
                <li>
                    ID: <strong>

                        {info.id}
                        </strong>
                </li>
                <li>
                    TITLE: <strong>{info.title}</strong>
                </li>
                <li><a href={info.link}>Link</a></li>
            </ul>
        </div>
    );
}

export default LocationInfoBox;