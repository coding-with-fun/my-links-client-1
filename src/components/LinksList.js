import React, { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { UserContext } from "../contexts/UserContext";

const LinksList = ({ links, handleList }) => {
    const { isUserAuthenticated } = useContext(UserContext);

    const handleDraggedList = (result) => {
        if (!result.destination) return;

        const items = Array.from(links);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        handleList(items);
    };

    return !isUserAuthenticated ? (
        <div className="links__container">
            <DragDropContext onDragEnd={handleDraggedList}>
                <Droppable droppableId="links">
                    {(provided) => (
                        <div
                            className="links_list"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {links.map(({ id, title }, index) => {
                                return (
                                    <Draggable
                                        key={id}
                                        draggableId={id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div className="link_container">
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="link_details"
                                                >
                                                    <p>{title}</p>
                                                </div>

                                                <i
                                                    className="bi bi-info-circle-fill info_icon"
                                                    onClick={() =>
                                                        console.log("object")
                                                    }
                                                ></i>
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    ) : (
        <div className="links__container">
            <div className="links_list">
                {links.map(({ id, title, url }) => {
                    return (
                        <div className="link_details" key={id}>
                            <a href={url} target="_blank" rel="noreferrer">
                                {title}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LinksList;
