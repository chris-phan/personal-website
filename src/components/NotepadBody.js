const NotepadBody = () => {
    return (
        <div id="np-body" style={divStyle}>
            <p style={textStyling}>                                  _ _ _</p>
            <p style={textStyling}>                               ^(- )- \---^-</p>
            <p style={textStyling}>                        ^--^-/              \-^-]-\--</p>
            <p style={textStyling}>                     -/          //                 - --\/</p>
            <p style={textStyling}>                  -/-           //         _//_          ---/</p>
            <p style={textStyling}>                 -            _//_  _       \\    //         )[</p>
            <p style={textStyling}>            _  -(     \\    -------- \      //_ _//_ _       -.-</p>
            <p style={textStyling}>             (-        \()           \\    / ---------        /-</p>
            <p style={textStyling}>             )\\--     (\\                //_    \\        )  -)--</p>
            <p style={textStyling}>              -\\                )     \\//              (/     ./</p>
            <p style={textStyling} className="staticTreeLine">            -.        _ _ _(     _ _ _ / \       o{"<"}  </p>
            <p style={textStyling} id="animateBird"></p>
            <p style={textStyling}>             \        ----      -----// . \_ _ _/\_             \-</p>
            <p style={textStyling}>             ).        (              [      ------         //-\</p>
            <p style={textStyling}>               (-     (         __    /   /               \-/.</p>
            <p style={textStyling}>              --          _ _  //\\  /   -\  //              --/</p>
            <p style={textStyling}>               -          - -\/    \/        /            \--.-</p>
            <p style={textStyling}>              )\             \/     | -     |/              -/</p>
            <p style={textStyling}>                --                  \             _      _\  \</p>
            <p style={textStyling}>                /  _    _   _      \/_      /_- /  _\ ./-</p>
            <p style={textStyling}>                --   -.    /    \ /      .  |</p>
            <p style={textStyling}>                                 /         \\</p>
            <p style={textStyling}>                               /   -         |\</p>
            <p style={textStyling}>                                       -      /</p>
            <p style={textStyling}>                               ]   /         /</p>
            <p style={textStyling}>                               \     \      \</p>
            <p style={textStyling}>                               /           /_ _</p>
            <p style={textStyling}>                                | -       \    \</p>
            <p style={textStyling}>                                 {"//"}            /_</p>
            <p style={textStyling}>                                |_   /         \/</p>
            <p style={textStyling} className='staticTreeLine'>                              /| \    .    -     ]            </p>
            <p style={textStyling} id="animateDialog"></p>
            <p style={textStyling}>                               /           _     \\</p>
            <p style={textStyling} id="animateHead">                              \\         /       //</p>
            <p style={textStyling} id="animateBody">                              /  .                |O</p>
            <p style={textStyling} id="animateLegs">                             |-  -                \{"<"}\{">"}_//\</p>
            <p style={textStyling}>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   ^^ ^^    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</p>
        </div>
    )
}

export default NotepadBody;

const divStyle = {
    height: 'auto',
    overflowY: 'auto',
    overflowX: 'hidden'
}

const textStyling = {
    marginLeft: '1vwpx',
    marginTop: '0px',
    fontSize: '1vw',
    fontFamily: 'monospace, Consolas, Monaco, Andale Mono',
    fontWeight: 'bold',
    whiteSpace: 'pre',
    overflowY: 'auto',
    overflowX: 'hidden',
}