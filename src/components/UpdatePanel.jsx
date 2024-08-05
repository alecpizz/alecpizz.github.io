export const UpdatePanel = ({ children, title }) => {
    return (
        <div className='updates-list'>
            <h4>{title}</h4>
            {children}
        </div>
    )
}