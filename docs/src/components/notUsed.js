    <List>
        {['Election Dates'].map((text, index) => (
        <ListItem button key={text} 
        onClick={() => { alert('clicked') }}
        >
            {/* <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon> */}
            <ListItemText primary={text} />
        </ListItem>
        ))}
    </List>
    <List>
        {['Election Dates', 'Voting in Elections', 'Congressional Districts', 'Legislative Districts', 'State Judicial Candidates', 'US Senate'].map((text, index) => (
        <ListItem button key={text} 
        onClick={() => { alert('clicked') }}
        >
            {/* <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon> */}
            <ListItemText primary={text} />
        </ListItem>
        ))}
    </List>


<Divider />