const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? 'text-white border-purple-500'
        : 'text-[#ADB7BE] border-slate-600 hover:border-white'

    return (
        <button
            className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag