import { secondCtgyModel } from './SecCtgyModel'
import { thirdCtgyModel } from './ThirdCtgyModel'

// OneToMany
secondCtgyModel.hasMany(thirdCtgyModel, {
  as: 'thirdctgy',
  foreignKey: 'secctgyid',
})

//ManyToOne

thirdCtgyModel.belongsTo(secondCtgyModel, {
  foreignKey: 'secctgyid',
  targetKey: 'secondctgyid', //主键
})

function findSecThrdCtgysByFstCtgyId(firstctgyId: number) {
    const result = secondCtgyModel.findAll({
        raw: true,
        where: {
            firstctgyId
        },
        include: [
            {
                model: thirdCtgyModel,
                as: 'thirdctgy',
            }
        ]
    })
    console.log(result);
    
}

findSecThrdCtgysByFstCtgyId(1)