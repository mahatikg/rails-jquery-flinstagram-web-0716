class PicturesController < ApplicationController


    def index
      @pictures = Picture.all
    end




    def like
      @picture = Picture.find(params[:id])
      @picture.update_likes(current_user)

      message = @picture.likes_message(current_user)

      respond_to do |f|
        f.json { render json: { message: message }}
      end

    end

    #
    # def picture_params
    #   #why don't i need this?
    # end


  end
