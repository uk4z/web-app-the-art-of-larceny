import '../css/rules.css'

function Rules() {
    return(
    <div className="rules">
        <h1 className="rulesHeader">Game Rules</h1>
        <p className="rulesContent">
            For each level, the main goal is to <strong>hack the computer</strong>. 
            Once it is done, an extraction point will be available in the map where you can <strong>escape</strong>.
            Along the way you can <strong>amass gems</strong> in order to increase your score. However try to 
            <strong> avoid guards and security system</strong>. Luckily, if you have been seen by the camera you can 
            try to <strong>suppress the footage</strong> in order to get the maximum score !

        </p>
        <h1 className="rulesHeader">Tournament Rules</h1>
        <p className="rulesContent">
            The contest is a <strong>speedrun</strong>. Complete each level the fastest way as possible with the following constraints: 
            <strong> none of the guards can be alerted, all gems have to be collected, suppress the footage or don't be spotted by the security system</strong>.
        </p>
    </div>
    );
}

export default Rules;

