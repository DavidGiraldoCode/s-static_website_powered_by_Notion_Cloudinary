function SuspenseStateView(props) {

    if (props.loading)
        return <div className="suspense_state_view"> <p>Loading...</p> </div>

    if (!props.loading)
        return <div className="suspense_state_view"> <p>Error 💩 </p> </div>
}

export default SuspenseStateView;