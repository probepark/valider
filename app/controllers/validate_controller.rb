require 'credit_card_sms_parser'

class ValidateController < ApplicationController

  include CreditCardSmsParser

  def test
    message = params[:message]
    render json: parse_sms(message)
  end

end
